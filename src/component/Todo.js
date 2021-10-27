import React from 'react'
import { Card, CardContent, Typography, Container, IconButton} from '@material-ui/core'
import {Check, Delete, Edit } from '@material-ui/icons'
const Todo = () => {
    return (
        <div>
            <Container>
                <Card variant="outlined" style={{marginTop:35, background:"lightgray"}}>
                  <CardContent>
                      <Typography variant="h5" component="h2" >
                          <IconButton>
                              <Check  style={{color:"green"}}/>
                           </IconButton>
                           Todo1
                          <IconButton style={{float:'right'}}>
                              <Delete  style={{color:"red"}}/>
                           
                          </IconButton>
                          <IconButton style={{float:'right'}}>
                              <Edit  style={{color:"blue"}}/>
                           
                          </IconButton>

                      </Typography>
                  </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default Todo
