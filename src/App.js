import React from 'react'
import LabTest from './components/LabTest'
import HealthCheckup from './components/HeathCheckup'
import BookingCard from './components/BookingCard'
import BookingSlot from './components/BookingSlot'
import LabCard from './components/LabCard'
import TrustedSection from './components/TrustedSection'
import HealthPackages from './components/HealthPackages'
import SafeLabTest from './components/SafeLabTest'
import FAQ from './components/FAQ'

const App = () => {
  return (
    <div>
      <LabTest />
      <HealthCheckup />
      <BookingCard />
      <BookingSlot />
      <LabCard />
      <TrustedSection />
      <HealthPackages />
      <SafeLabTest />
      <FAQ/>
    </div>
  )
}


export default App