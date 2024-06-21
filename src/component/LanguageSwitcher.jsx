
import { Button, ButtonGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'
// import i18n from '../i18n.js'

const LanguageSwitcher = () => {
    const {i18n} =useTranslation()
    const handleChaneg = (lng) => {
      console.log(lng)

      i18n.changeLanguage(lng)
    }
      
      
  
    
  return (
    <ButtonGroup variant='contained'color='primary'>
        <Button  onClick={()=>handleChaneg('en')}>English</Button>
        <Button  onClick={()=>handleChaneg('es')}>Esapanol</Button>
    </ButtonGroup>
  )
}

export default LanguageSwitcher
