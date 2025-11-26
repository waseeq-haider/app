import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Upload, Clock, Calendar as CalendarIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProcessExplainer from '../components/form/ProcessExplainer'

export default function QuotePage() {
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: 'Detroit',
        jobType: '',
        description: '',
        urgency: false,
        date: '',
        time: ''
    })
    const [selectedImages, setSelectedImages] = useState<File[]>([])

    const totalSteps = 4

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files)
            setSelectedImages(prev => [...prev, ...filesArray])
        }
    }

    const removeImage = (index: number) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index))
    }

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData, selectedImages)
    }

    return (
        <div className="min-h-screen bg-surface-50">
            {/* Header */}
            <div className="glass sticky top-0 z-20 border-b border-white/20 px-6 py-4">
                <div className="container-custom flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Link
                            to="/"
                            className="w-10 h-10 bg-white hover:bg-gray-50 rounded-full border border-gray-200 flex items-center justify-center transition-colors"
                        >
                            <ArrowLeft size={20} className="text-gray-700" />
                        </Link>
                        <div>
                            <h1 className="text-lg font-bold text-gray-900">Request a Quote</h1>
                            <p className="text-xs text-gray-500">Step {currentStep} of {totalSteps}</p>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="hidden md:flex items-center space-x-2">
                        {[...Array(totalSteps)].map((_, index) => (
                            <div
                                key={index}
                                className={`h-1.5 rounded-full transition-all duration-500 ${index + 1 <= currentStep
                                        ? 'w-12 bg-blue-600'
                                        : 'w-4 bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                            {/* Step 1: Contact Information */}
                            {currentStep === 1 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Let's start with the basics</h2>
                                        <p className="text-gray-600">Where should we send your quote?</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="input-premium"
                                                placeholder="John Doe"
                                                autoFocus
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="input-premium"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="input-premium"
                                                placeholder="(555) 123-4567"
                                            />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                Property Address
                                            </label>
                                            <input
                                                type="text"
                                                name="address"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="input-premium"
                                                placeholder="123 Main Street"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                                City
                                            </label>
                                            <select
                                                name="city"
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="input-premium appearance-none"
                                            >
                                                <option value="Detroit">Detroit, MI</option>
                                                <option value="Chicago">Chicago, IL</option>
                                                <option value="Cleveland">Cleveland, OH</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Job Details */}
                            {currentStep === 2 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Tell us about the job</h2>
                                        <p className="text-gray-600">The more details, the more accurate the quote.</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Service Needed
                                        </label>
                                        <select
                                            name="jobType"
                                            value={formData.jobType}
                                            onChange={handleInputChange}
                                            className="input-premium appearance-none"
                                        >
                                            <option value="">Select a service...</option>
                                            <option value="handyman">Handyman</option>
                                            <option value="drywall">Drywall & Painting</option>
                                            <option value="plumbing">Plumbing</option>
                                            <option value="electrical">Electrical</option>
                                            <option value="hvac">HVAC</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                                            Description
                                        </label>
                                        <textarea
                                            name="description"
                                            value={formData.description}
                                            onChange={handleInputChange}
                                            className="input-premium min-h-[150px] resize-none"
                                            placeholder="Please describe the work you need done..."
                                        />
                                    </div>

                                    <div className="flex items-center justify-between bg-red-50 border border-red-100 rounded-2xl p-6">
                                        <div>
                                            <p className="font-bold text-red-900">Emergency Service?</p>
                                            <p className="text-sm text-red-700">Get priority dispatch (extra fee applies)</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                name="urgency"
                                                checked={formData.urgency}
                                                onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.checked }))}
                                                className="sr-only peer"
                                            />
                                            <div className="w-14 h-8 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-500"></div>
                                        </label>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Photos */}
                            {currentStep === 3 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Show us the issue</h2>
                                        <p className="text-gray-600">Photos help our AI generate an instant quote.</p>
                                    </div>

                                    <div className="border-2 border-dashed border-gray-200 rounded-3xl p-12 text-center hover:border-blue-500 hover:bg-blue-50/50 transition-all cursor-pointer group">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            multiple
                                            onChange={handleImageSelect}
                                            className="hidden"
                                            id="file-upload"
                                        />
                                        <label htmlFor="file-upload" className="cursor-pointer">
                                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                                <Upload className="w-10 h-10 text-blue-600" />
                                            </div>
                                            <p className="text-xl font-bold text-gray-900 mb-2">
                                                Click to upload photos
                                            </p>
                                            <p className="text-gray-500">
                                                or drag and drop them here
                                            </p>
                                        </label>
                                    </div>

                                    {selectedImages.length > 0 && (
                                        <div className="grid grid-cols-3 gap-4">
                                            {selectedImages.map((file, index) => (
                                                <div key={index} className="relative group rounded-2xl overflow-hidden">
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Upload ${index + 1}`}
                                                        className="w-full h-32 object-cover"
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={() => removeImage(index)}
                                                        className="absolute top-2 right-2 w-8 h-8 bg-black/50 hover:bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all backdrop-blur-sm"
                                                    >
                                                        <span className="text-xl">&times;</span>
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Step 4: Schedule */}
                            {currentStep === 4 && (
                                <div className="space-y-8 animate-fade-in">
                                    <div>
                                        <h2 className="text-3xl font-bold mb-2 text-gray-900">Pick a time</h2>
                                        <p className="text-gray-600">When works best for our team to visit?</p>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="p-6 border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                                    <CalendarIcon size={24} />
                                                </div>
                                                <span className="font-bold text-lg">Select Date</span>
                                            </div>
                                            <input
                                                type="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleInputChange}
                                                className="w-full p-2 bg-transparent border-none focus:ring-0 text-gray-900 font-medium"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        </div>

                                        <div className="p-6 border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-md transition-all cursor-pointer">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                                                    <Clock size={24} />
                                                </div>
                                                <span className="font-bold text-lg">Select Time</span>
                                            </div>
                                            <select
                                                name="time"
                                                value={formData.time}
                                                onChange={handleInputChange}
                                                className="w-full p-2 bg-transparent border-none focus:ring-0 text-gray-900 font-medium"
                                            >
                                                <option value="">Choose a slot...</option>
                                                <option value="morning">Morning (8AM - 12PM)</option>
                                                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                                                <option value="evening">Evening (4PM - 8PM)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                                        <h3 className="font-bold text-gray-900 mb-4">Summary</h3>
                                        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 text-sm">
                                            <div>
                                                <dt className="text-gray-500">Service</dt>
                                                <dd className="font-medium text-gray-900">{formData.jobType || 'Not selected'}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-gray-500">Location</dt>
                                                <dd className="font-medium text-gray-900">{formData.city}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-gray-500">Urgency</dt>
                                                <dd className="font-medium text-gray-900">{formData.urgency ? 'Emergency' : 'Standard'}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>
                            )}

                            {/* Navigation */}
                            <div className="flex items-center justify-between mt-12 pt-8 border-t border-gray-100">
                                {currentStep > 1 ? (
                                    <button
                                        type="button"
                                        onClick={prevStep}
                                        className="btn-ghost flex items-center gap-2"
                                    >
                                        <ArrowLeft size={20} />
                                        <span>Back</span>
                                    </button>
                                ) : (
                                    <div />
                                )}

                                {currentStep < totalSteps ? (
                                    <button
                                        type="button"
                                        onClick={nextStep}
                                        className="btn-primary flex items-center gap-2 px-8"
                                    >
                                        <span>Continue</span>
                                        <ArrowRight size={20} />
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        className="btn-primary flex items-center gap-2 px-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-green-500/25"
                                    >
                                        <span>Submit Request</span>
                                        <Check size={20} />
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <ProcessExplainer />
                    </div>
                </div>
            </div>
        </div>
    )
}
