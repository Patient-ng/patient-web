import React, { useState } from 'react'
import { Check } from 'lucide-react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const BeneficiaryOption = ({ value, title, description, color }) => (
  <div className="flex items-center space-x-2">
    <RadioGroupItem value={value} id={value} className="sr-only peer" />
    <Label
      htmlFor={value}
      className={`flex flex-1 items-center space-x-3 rounded-lg border p-4 hover:bg-gray-50 cursor-pointer transition-colors
        peer-data-[state=checked]:border-${color}-500 peer-data-[state=checked]:bg-${color}-50
        [&:has([data-state=checked])]:border-${color}-500 [&:has([data-state=checked])]:bg-${color}-50`}
    >
      <RadioGroupItem value={value} id={value} className={`border-${color}-500 text-${color}-500`} />
      <div className="flex-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-500">
          {description}
        </p>
      </div>
    </Label>
  </div>
)

const BeneficiarySelection = ({ value, onChange, onEdit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    accountNumber: '',
    bankName: '',
    accountName: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleBankChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      bankName: value
    }))
  }

  return (
    <Card className="p-6">
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium break-words inline-block w-full max-w-[16rem] sm:max-w-none py-1">
              Share the details of your fundraising with donors
            </h3> 
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(2)}>
            Edit
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium">Add a cover photo or video</h3>
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-white">
              <Check className="h-2 w-2" />
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={() => onEdit(1)}>
            Edit
          </Button>
        </div>
      </div>

      <h2 className="text-xl font-medium mb-6">Who are you fundraising for?</h2>
      <RadioGroup
        value={value}
        onValueChange={onChange}
        className="space-y-4"
      >
        <BeneficiaryOption
          value="yourself"
          title="Yourself"
          description="Funds are delivered to your bank account for your own use"
          color={'emerald'}
        />
        <BeneficiaryOption
          value="someone"
          title="Someone else"
          description="Funds will be delivered to a beneficiary account"
          color={'emerald'}
        />
        <BeneficiaryOption
          value="charity"
          title="Charity"
          description="Funds will be delivered to your chosen nonprofit for you"
          color={'emerald'}
        />
      </RadioGroup>

      {value && (
        <div className="mt-6 space-y-4">
          <h3 className="text-lg font-medium">Beneficiary Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="Enter first name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Enter last name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter address"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleInputChange}
                placeholder="Enter account number"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="accountName">Account Name</Label>
              <Input
                id="accountName"
                name="accountName"
                value={formData.accountName}
                onChange={handleInputChange}
                placeholder="Enter account name"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="bankName">Bank Name</Label>
            <Select onValueChange={handleBankChange} value={formData.bankName}>
              <SelectTrigger>
                <SelectValue placeholder="Select a bank" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="access">Access Bank</SelectItem>
                <SelectItem value="gtb">Guaranty Trust Bank</SelectItem>
                <SelectItem value="zenith">Zenith Bank</SelectItem>
                <SelectItem value="firstbank">First Bank</SelectItem>
                {/* Add more banks as needed */}
              </SelectContent>
            </Select>
          </div>
        </div>
      )}
    </Card>
  )
}

export default BeneficiarySelection