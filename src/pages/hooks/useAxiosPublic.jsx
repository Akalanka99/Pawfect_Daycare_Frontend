import axios from 'axios'
import React from 'react'
const API_URL=process.env.VITE_API_URL;


const axiosPublic =  axios.create({
    baseURL: API_URL,
  })

const useAxiosPublic = () => {
  return axiosPublic
}

export default useAxiosPublic;
