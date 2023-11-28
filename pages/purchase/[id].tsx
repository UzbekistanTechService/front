import React, { useState } from "react";
import Head from "next/head";
import style from "@/styles/purchase.module.sass";
import { useRouter } from "next/router";
import { Alert, Box, Snackbar, TextField, Typography, useTheme } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "@/utils/axios.config";
import Image from "next/image";

const Purchase = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const phoneRegExp = /^998(9[012345789]|6[125679]|7[01234569])[0-9]{7}$/;
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      phone: "",
      name: "",
      service: router.query.name,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Min length is 3")
        .max(20, "Max length is 20")
        .required("Name is required!"),
      phone: Yup.string()
        .required("Phone is required!")
        .matches(phoneRegExp, "Phone number is not valid"),
      service: Yup.string()
        .max(20, "Min length is 20")
        .min(3, "Min length is 3")
        .required("Service name is required!"),
    }),
    onSubmit: async (values, helpers) => {
      setIsLoading(true);
      try {
        const { data, status } = await axios.post("/poll/create", {
          phone_number: values.phone,
          name: values.name,
          service: values.service,
        });
        if (status == 201 || status == 200) {
          console.log(data);
          setIsLoading(false);
          setIsError("");
          helpers.resetForm();
          setAlertOpen(true);
          setTimeout(() => {
            router.push("/");
          }, 5000);
        }
      } catch (error) {
        setIsError("Error in submitting. Try again");
        setIsLoading(false);
      }
    },
  });

  console.log(formik.values);

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setAlertOpen(false);
  };

  return (
    <>
      <Head>
        <title>Purchase</title>
      </Head>
      <main className={style.purchase}>
        <Snackbar
          open={alertOpen}
          autoHideDuration={5000}
          onClose={handleClose}
          message="Note archived"
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            This is a success message!
          </Alert>
        </Snackbar>
        <div className={style.purchase__left}>
          <Typography variant="h5" textAlign={"center"}>
            Xizmat turini sotib olish
          </Typography>
          <form
            noValidate
            className={style.purchase__inputbox}
            onSubmit={formik.handleSubmit}
          >
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
              error={formik.errors.name ? true : false}
              helperText={formik.touched.name && formik.errors.name}
              value={formik.values.name}
              placeholder="Ism Familiya"
              label="Ism Familiya"
            />
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="phone"
              error={formik.errors.phone ? true : false}
              helperText={formik.touched.phone && formik.errors.phone}
              value={formik.values.phone}
              placeholder="Telefon raqam"
              label="Telefon Raqam"
            />
            <TextField
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="service"
              error={formik.errors.service ? true : false}
              helperText={formik.touched.service && formik.errors.service}
              value={formik.values.service}
              placeholder="Xizmat turi"
              label="Xizmat turi"
            />
            {isError ? (
              <Typography variant="caption" textAlign={"center"} color={"red"}>
                {isError}
              </Typography>
            ) : (
              ""
            )}
            <LoadingButton
              loading={isLoading}
              variant="contained"
              type="submit"
            >
              Submit
            </LoadingButton>
          </form>
        </div>
        <Box sx={{ bgcolor: "primary.main" }} className={style.purchase__right}>
          <Image src={"/images/purchase.png"} alt="purchase" width={500} height={500}/>
        </Box>
      </main>
    </>
  );
};

export default Purchase;
