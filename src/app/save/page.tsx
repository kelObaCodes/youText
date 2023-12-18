import React from "react"
import SaveTexts from "@/components/SaveTexts"
import {  NotificationProvider } from '../../components/Notifications';

export default function SaveTextsComponent() {
    return (
      <NotificationProvider>
    <SaveTexts/>
    </NotificationProvider>
    )
  }