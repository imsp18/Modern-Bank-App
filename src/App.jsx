import styles from './style'

const App = () => (
  <div className='bg-primary w-full overflow-hideen'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        Navbar
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        Hero
      </div>
    </div>
    <div className={`bg-primary  ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        stats
        buisness
        billing
        CardDeal
        Testimonial
        Client
        CTA
        Footer 
        
      </div>
    </div>
    
  </div>
);

export default App
