import React from 'react'
const styles = {
  parentContainer: "w-full h-full dark:bg-[#151515] overflow-x-hidden md:overflow-x-auto   ",
  container: "2xl:container 2xl:mx-auto ",
  chiefCenter: "max-w-[1300px] w-full  px-4 md:px-6 mx-auto  ",
};
const ContainerLayout = ({children}) => {
  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className={styles.chiefCenter}>
          
        {children}
      </div>
      
      </div>
    </div>
  );
}

export default ContainerLayout