import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getOwnLawyerRequest } from '../../redux/thunk/getAllRequest'
import OrderCard from '../OrderCard/OrderCard'

function Greeting() {
  const navigation = useNavigate()
  const dispatch = useDispatch()
  const { session } = useSelector(store => store.session)
  const { isValidate } = session
  const { id } = session



  // const renderLawyerButton = () => {
  //   // if (isLawyer) {
  //     /// return <button onClick={()=> navigation('/confirmEducation')} className="button shadow">Подтвердить образование</button>
  //   }
  // }


  const renderLawyerButton = () => {
    if (isValidate === false) {
      return <button onClick={() => navigation('/confirmEducation')} className="button shadow btn-accept">Подтвердить образование</button>
    }
  }


  const renderButtons = () => {
    return <div className="row row--right">
      <button onClick={() => navigation('/updateProfile')} className="button shadow btn-changeProfile">Изменить профиль</button>
      {renderLawyerButton()}
    </div>
  }

  return (
    <div>
      <h2 className="row row--center">Уважаемый(-ая) {session.firstname} {session.fathersname ? session.fathersname : ''}!</h2>

      <br />
      <p className='greeting-p'>Здесь Вы можете найти юриста и работать с ним в режиме реального времени.</p>
      <p className='greeting-p'>Logos дает возможность найти юриста для любых целей и задач, а также легко и комфортно обмениваться информацией для эффектной работы.</p>
      <br />

      <p className="row row--center greeting-p">Добро пожаловать!</p>
      {renderButtons()}
    </div>
  )
}

export default Greeting
