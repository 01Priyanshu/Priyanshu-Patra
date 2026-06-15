"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Eye, X } from "lucide-react"

interface CertificatePreviewProps {
  title: string
  imagePath: string
  issuer?: string
  date?: string
  description?: string
}

import { getImagePath } from "@/lib/utils"

export default function CertificatePreview({ title, imagePath, issuer, date, description }: CertificatePreviewProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
          title="Preview Certificate"
        >
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle>{title}</DialogTitle>
          <DialogClose asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogClose>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          {(issuer || date || description) && (
            <div className="flex flex-col gap-1 text-sm p-4 bg-primary/5 rounded-lg">
              {issuer && (
                <p>
                  <span className="font-semibold">Issuer:</span> {issuer}
                </p>
              )}
              {date && (
                <p>
                  <span className="font-semibold">Date:</span> {date}
                </p>
              )}
              {description && (
                <p>
                  <span className="font-semibold">Description:</span> {description}
                </p>
              )}
            </div>
          )}
          <div className="relative w-full h-[500px] border border-primary/10 rounded-lg overflow-hidden bg-white">
            <Image src={getImagePath(imagePath || "/placeholder.svg")} alt={title} fill className="object-contain" priority />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
