import { motion } from 'motion/react'
import React from 'react'

export default function PrimaryButton({ BtnName }: {
  BtnName: string
}) {
  return (
    <motion.div
    >
      { BtnName }
    </motion.div>
  )
}
