import React from 'react'
import Head from 'next/head';
import style from "@/styles/purchase.module.sass"
import { useRouter } from 'next/router'
import { FormControl, Input, TextField } from '@mui/material';

const Purchase = () => {
  const { query: id } = useRouter()
  console.log(id);
  
  return (
    <>
      <Head>
        <title>Purchase</title>
      </Head>
      <main className={style.purchase}>
        <div className={style.purchase__left}>
          <FormControl>
            <TextField placeholder='Ism Familiya' label="Ism Familiya"/>
            <TextField placeholder='Telefon raqam' label="Telefon Raqam"/>
            <TextField placeholder='Xizmat turi' label="Xizmat turi"/>
          </FormControl>
        </div>
        <div className={style.purchase__right}>
          
        </div>
      </main>
    </>
  )
}

export default Purchase