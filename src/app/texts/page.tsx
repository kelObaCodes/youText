"use client"
import React from "react"
import Texts from "@/components/Texts"
import {  NotificationProvider } from '../../components/Notifications';
export default function TextsComponent() {
    return (
       <NotificationProvider>
    <Texts/>
    
    </NotificationProvider>
    )
  }