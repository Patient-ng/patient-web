import { useState } from 'react';
import { Country, State, City } from 'country-state-city';
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AuthForm from '@/components/auth/AuthForm';
import AuthFooter from '@/components/auth/AuthFooter';
import { Link, useNavigate } from 'react-router';
import { Button } from '@/Components/ui/button';
import { CustomButton } from '@/Components/CustomButton';
import { FormInput } from '@/Components/FormInput';
import AuthLayout from '@/Components/Auth/AuthLayout';

export default function PersonalizeProfile() {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    country: '',
    state: '',
    city: '',
    streetAddress: '',
  });
  const navigate = useNavigate()

  const countries = Country.getAllCountries();
  const states = formData.country 
    ? State.getStatesOfCountry(formData.country)
    : [];
  const cities = formData.state
    ? City.getCitiesOfState(formData.country, formData.state)
    : [];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'country' ? { state: '', city: '' } : {}),
      ...(name === 'state' ? { city: '' } : {})
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    navigate('/')
  };

  return (
    
    <>

    <AuthLayout
      title="Personalize your experience"
      subtitle="Tell us a bit about yourself to tailor your iPatient experience."
      layoutStyle="max-w-[450px]"
      content={
        <>
        

        <form className="space-y-4 mt-4">
          <FormInput
            id="age"
            label="Age"
            type="number"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
          <FormInput
            id="streetAddress"
            label="Street Address"
            type="text"
            placeholder="Enter your street address here"
            name="age"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />

<div className="space-y-2">
            <Label htmlFor="gender">Gender</Label>
            <Select
              value={formData.gender}
              onValueChange={(value) => handleSelectChange('gender', value)}
            >
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Select
              value={formData.country}
              onValueChange={(value) => handleSelectChange('country', value)}
            >
              <SelectTrigger id="country">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((country) => (
                  <SelectItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* {field.type === 'password' && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
              <span className="sr-only">
                {showPassword ? 'Hide password' : 'Show password'}
              </span>
            </Button>
          )} */}

          

          {/* <p className='my-3'>
          <Link to="/reset-password" className="text-emerald-500 hover:text-emerald-600 ">
             Forgot your password?
            </Link>
          </p> */}

          <CustomButton onClick={handleSubmit} className='w-full h-[40px] bg-emerald-500 hover:bg-emerald-800'>
           Continue
          </CustomButton>


          <p className="text-sm text-gray-600 text-center">
             Don't have an account?
            <Link to="/signup" className="text-emerald-500 hover:text-emerald-600">
             Signup
            </Link>
          </p>
          
          
        </form>
        </>
      }
     />
     
    </>
  );
}