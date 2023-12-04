import styles from "./index.module.sass";

export default function CompanyinNumbers() {
  return (
    <>
      <div className={styles.companyInNumbers}>
        <div className={styles.companyInNumbers__leftVideo}>
          <video autoPlay loop muted>
            <source src="./images/hello.h264.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <h3>КОМПАНИЯ В ЦИФРАХ</h3>
          <div className={styles.companyInNumbers__numbers}>
            <div>
              <div>
                <p>3</p>
                <p>года на рынке</p>
              </div>
              <div>
                <p>8</p>
                <p>лет опыта в интернет маркетинге</p>
              </div>
              <div>
                <p>+150</p>
                <p>реализованных проектов</p>
              </div>
            </div>

            <div>
              <div>
                <p>2</p>
                <p>филиала Алматы и Нур-Султан</p>
              </div>
              <div>
                <p>50</p>
                <p>сотрудников в нашем штате</p>
              </div>
              <div>
                <p>1000</p>
                <p>более 1000 проведенных консультации</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
