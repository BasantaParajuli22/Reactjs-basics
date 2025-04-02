import React from 'react'
import ButtonClick from '../components/hooks/ButtonClick'
import ChangeInterval from '../components/hooks/ChangeInterval'
import SetName from '../components/hooks/SetName'
import SetActive from '../components/hooks/SetActive'
import FormChange from '../components/hooks/FormChange'
import FetchApi from '../components/hooks/FetchApi'
import FetchApiId from '../components/hooks/FetchApiId'
import Spinner from '../components/Spinner'

function AboutPage() {
  return (
    <>
    <div>AboutPage</div>
    <ButtonClick />
    <ChangeInterval />
    <SetName />
    <SetActive />
    <FormChange />
    <FetchApi />
    <Spinner />
    </>
  )
}

export default AboutPage