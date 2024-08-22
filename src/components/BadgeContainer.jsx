import React, { useState } from 'react'
import './BadgeContainer.css'
import Badge from './Badge';

function BadgeContainer() {

  //severity
  //0 = no rating
  //1 = bad
  //2 = neutral
  //3 = good
  const createBadge = (path, name, fill, hasSeverity) => {
    return {
      path,
      name,
      fill,
      hasSeverity,
      severity: 0,
    }
  }

  const [badgeInfo, setBadgeInfo] = useState([
    createBadge("public\\svgs\\badges\\cleanicon.svg", "clean", "#40a441", true),
    createBadge("public\\svgs\\badges\\comfortableicon.svg", "comfortable", "#fbb545", true),
    createBadge("public\\svgs\\badges\\explainedicon.svg", "explained", "#4e54d7", true),
    createBadge("public\\svgs\\badges\\ontimeicon.svg", "on time", "#e02a5f", false),
    createBadge("public\\svgs\\badges\\accomodatingicon.svg", "accomodating", "#e02a5f", false),
    createBadge("public\\svgs\\badges\\warmgreetingicon.svg", "warm greetings", "#40a441", false),
  ]);

  const editSeverity = (name, severity) => {
    let tmp = badgeInfo
    tmp.map((_, i) => {
      if (tmp[i].name == name) {
        tmp[i].severity = severity
      }
    })
    setBadgeInfo(tmp)
  }

  return (
    <div className='container'>
      <section className='description'>
        <h2>Choose Badges</h2>
        <p>Choose the badges below that best describe your experience with this staff member</p>
      </section>
      <article className='badge-list'>
        {badgeInfo.map((badgeInfo, i) => (
          <Badge key={badgeInfo.name} badgeInfo={badgeInfo} editSeverity={editSeverity} />
        ))}
      </article>
    </div>
  )
}

export default BadgeContainer