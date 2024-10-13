import React from 'react';
import './MembershipCard.css';
import MembershipDetail from '../MembershipDetail';

const MembershipCard = ({ title, membershipDetails }) => {
  return (
    <div className='membership-card'>
      <h2>{title}</h2>
      <div className="membership-details">
        {
          membershipDetails.map((detail, index) => (
            <MembershipDetail 
              key={index}
              content={detail.detail}
              applicable={detail.applicable}
            />
          ))
        }
      </div>

      <a href='https://www.acm.org/membership/membership-benefits' target='_blank' className='exploreBtn'>Explore More</a>
    </div>
  );
}

export default MembershipCard;
