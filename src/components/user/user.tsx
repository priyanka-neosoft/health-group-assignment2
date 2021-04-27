import MaterialTable from 'material-table';
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL, COUNTER_PAGE, USER_PAGE } from '../../assets/constant';



/**
 * @description  User component.
 * Component used for displaying User Details in table.
*/

const User:React.FC<[]> = () =>{
  const [users, setUsers] = useState<[]>([])

  // Effect for fetching User details from API
  useEffect(()=>{
    axios.get(API_URL)
    .then(response =>{
    // handle success
    setUsers(response.data)
    })
    .catch( error => {
    // handle error
    })
  }, [])

  // Function to validate user details
  const validateUser =(newUser: { name: any; email: any; position: any; }) =>{
    if(!newUser.name || !newUser.email || !newUser.position)  {
      return false;
    }
    return true;
  }

  return(
    <div>
      <div>
        <Link to= {USER_PAGE}>User Page</Link>
        <Link to={COUNTER_PAGE}>Counter Page</Link>
      </div>
      <div>
        <MaterialTable 
          title="User List"
          localization={{
            body:{
              addTooltip : 'Add User'
            }
          }
            
          }
          columns={[
            { title: 'Name', field: 'name'},
            { title: 'Email', field: 'email' },
            {title: 'Postion', field: 'position'}
          ]}
          data={users}
          options={{
            actionsColumnIndex: -1
          }}
          editable={{onRowAdd:newUser =>
            new Promise<void>((resolve, reject) => {
              if(!validateUser(newUser)){
                alert("Please add all the details");
                reject();
                return;
              }
              else{
                // API call to add user
                axios.post(API_URL, newUser)
                .then( (response) =>{
                  // handle success
                  alert(`${response.data.name} Added Successfully`)
                  resolve();
                })
                .catch( (error) =>{
                  // handle error
                  console.log(error);
                  reject();
                });
              }
            })
          }}
        />
      </div>
    </div>
  )
}

export default User;