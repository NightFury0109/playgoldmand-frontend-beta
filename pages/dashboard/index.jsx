import {useState} from 'react'
import cb from 'classnames';

import UserAvartar from '../../components/useravatar'
import FooterMenu from '../../components/menu/menu'
import MineTime from '../../components/minetime'
import Status from '../../components/status'
import DashboardContent from '../../components/dashboardContent'

const Dashboard = () => {
  let [status, setStatus] = useState(0); 

  return (
    <div className={cb(
      'w-screen bg-cover h-screen bg-opacity-50',
      'pt-10 items-center'
    )}>
      {/* dashboard header */}
      <div className={cb(
        'flex column justify-between sm:justify'
      )}>
        <UserAvartar />
        <div className="sm:ml-28">
          <MineTime />
        </div>
        <Status />
      </div>

      {/* dashboard content */}
      <div className="tab_content">
        <DashboardContent />
      </div>

      {/* dashboard footer */}
      <FooterMenu />
    </div>
  )
}

export default Dashboard