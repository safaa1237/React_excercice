import React  , {useState} from 'react'
import { Grid, Menu, Input, Image , Button} from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

import { seedDevices } from 'seedData/devices.json'
import DeviceList from './DeviceList'
import {ErrorBoundary} from 'react-error-boundary'
import oops from "../../images/OOPSIN.png"

const Devices = () => {
  
  const [errorblockFlag, seterrorblockflag]=useState(false);

  const showerrorBlock = (error, componentStack)=>{
    if(errorblockFlag){
      return <div>{error.message} :{componentStack}</div>
    }
  }

  function fallbackRender(error, resetErrorBoundary , componentStack){
    return (
      <div>
        <Image src={oops}></Image>
        <Button onClick={showError=()=>{ seterrorblockflag(true)}}>Show more details about error</Button>
        <Button onClick={resetErrorBoundary}> Re-Try </Button>
        {showerrorBlock(error, componentStack)}
      </div>
    )
  }

  return (
    <Grid>
      <ErrorBoundary fallbackRender={fallbackRender(error, resetErrorBoundary, componentStack)}>
        
        <Grid.Row>
          <Menu position='right'>
            <Menu.Item>
              <Input
                icon='search'
                iconPosition='left'
                placeholder='fake search :O'
              />
            </Menu.Item>
          </Menu>
        </Grid.Row>

        <Grid.Row>   
            <DeviceList devices={seedDevices} />        
        </Grid.Row>

      </ErrorBoundary>
    </Grid>
  )
}

export default withRouter(Devices)
