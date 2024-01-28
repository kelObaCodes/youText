"use client"
import React from "react"
import Texts from "@/components/Texts"
import {  NotificationProvider } from '../../../components/Notifications';
export default function TextsComponent(props:any) {
   console.log(props)
    return (
       <NotificationProvider>
    <Texts
    params={props.params.slug}
    />
    
    </NotificationProvider>
    )
  }