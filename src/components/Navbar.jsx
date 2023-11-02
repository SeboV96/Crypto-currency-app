import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import {Link} from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutline, BulbOutline, FundOutlined, MenuOutlined} from '@ant-design/icons'
import icon from "../images/cryptocurrency.png"



export const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className='logo'>
            <Link to="/">CryptoCurrencies</Link>
            </Typography.Title>
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
    </div>
  )
}