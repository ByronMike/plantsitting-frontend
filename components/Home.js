import React from 'react'

function Home() {
    const [formProgress, setFormProgress] = useState(0);
    const nextStep = () => {
        setFormProgress(formProgress + 1)
    }

    if(formProgress==0) {
        return 
        <Step0 nextStep={nextStep}/>
    }

    if(formProgress==1) {
        return 
        <Step1 nextStep={nextStep}/>
    }


  return (
    <div>Home</div>
  )
}

export default Home