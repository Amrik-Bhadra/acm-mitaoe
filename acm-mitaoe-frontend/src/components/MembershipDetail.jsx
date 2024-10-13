import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import './MembershipCard/MembershipCard.css'

const MembershipDetail = ({content, applicable}) => {
  return (
    <span className='membership-detail-span'>
        {
            applicable ? <FaRegCheckCircle className='tickIcon'/> : <RxCrossCircled className='crossIcon'/>
        }
        <p>
            {content}
        </p>
    </span>
  )
}

export default MembershipDetail