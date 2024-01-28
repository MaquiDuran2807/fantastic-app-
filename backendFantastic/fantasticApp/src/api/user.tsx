// Date: 07/04/2021
import { useMutation } from '@tanstack/react-query'
import apiClient from '../apiClient'
import { tokens ,UserInfo } from '../types/UserInfo'
import axios from 'axios'


export const fetchUser = async (token:string) => {
  const config = {
    headers: {
      'Content-type': 'application/json',
      'Authorization': `JWT ${token}`
    },
  }
  console.log(config, 'tokenAutorizaion aqui estoy en fetchUser',apiClient.getUri());
    
    try {
      // console.log(token, 'token aqui estoy en fetchUser');
        const response = await apiClient.get<UserInfo>('/auth/users/me/')
          return response.data
    } catch (error) {
        console.log(error);
        
    }
  
}
export const useSigninMutation = () =>
  useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string
      password: string
    }) =>
      (
        await apiClient.post<tokens>(`auth/jwt/create/`, {
          email,
          password,
        })
      ).data,
      onSuccess: (data) => {
        localStorage.setItem('token', data.access)
        localStorage.setItem('refreshToken', data.refresh)
      },
  })


