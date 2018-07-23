
/*
 * @file: user.js
 * @description: Controllers regarding user services.
 * @date: 20.7.2018
 * @author:sheenam
 * */

 import {addUserService} from '../services/user';
import {UnknownError,CustomSuccessResponse,AlreadyRegistered} from '../utilities/CreateErrors' ;
export const addUser = async (root, payload, context) => {
    console.log(context,"contextttt")
    let result = await addUserService(payload) ;
    if(result.emailAlreadyexists){
        throw new AlreadyRegistered({
            data : {
                reason : 'email already exists.' 
            }
        })
    }
    if(result){
        return result
     //   return CustomSuccessResponse({message : 'User has been registered successfully.'})
    }else{
         throw new  UnknownError({
            data :{
                reason : 'Error in registration.'
            }
        })
    }
}