import Link from "next/link";
import { Zap, Package, RefreshCw, BarChart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold tracking-tight text-stone-900">
                Customizer.pro
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-stone-900 font-medium">Features</Link>
              <Link href="#integrations" className="text-gray-600 hover:text-stone-900 font-medium">Integrations</Link>
              <Link href="#pricing" className="text-gray-600 hover:text-stone-900 font-medium">Pricing</Link>
              <div className="flex items-center space-x-4 ml-4">
                <Link href="/login" className="text-gray-900 font-medium hover:text-gray-600">Login</Link>
                <Link href="/signup" className="bg-stone-900 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-stone-800 transition-colors shadow-sm">
                  Start Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-8 border border-blue-100">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
            New: Printify Integration Now Live
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight mb-8 leading-tight">
            Automate <span className="text-blue-600">mockups</span>, proofs<br />
            and production files
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto mb-10 leading-relaxed">
            Stop spending hours manually editing customer designs. Customizer automatically generates production files and realistic mockups the moment an order is placed.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/signup" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200">
              Start 14-day free trial
            </Link>
            <Link href="/demo" className="w-full sm:w-auto bg-white text-stone-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors border border-gray-200 shadow-sm">
              Book a demo
            </Link>
          </div>
          <p className="mt-6 text-sm text-gray-500">No credit card required. Cancel anytime.</p>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Everything you need to scale</h2>
            <p className="mt-4 text-xl text-gray-600">Built specifically for personalized product businesses.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Instant Mockups</h3>
              <p className="text-gray-600 leading-relaxed">Generate photorealistic mockups instantly for your storefront. Show customers exactly what they're getting.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Print-Ready Files</h3>
              <p className="text-gray-600 leading-relaxed">Automatically generate vector or high-res raster files formatted perfectly for your print provider.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <RefreshCw size={24} />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Order Routing</h3>
              <p className="text-gray-600 leading-relaxed">Route orders to different print providers automatically based on rules you define.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div id="integrations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl mb-12">Works seamlessly with your stack</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale">
            {/* Using standard img tags pointing to the real Customizer site assets if possible, or placeholder text */}
            <span className="text-2xl font-bold">Shopify</span>
            <span className="text-2xl font-bold">Etsy</span>
            <span className="text-2xl font-bold">WooCommerce</span>
            <span className="text-2xl font-bold">Printify</span>
            <span className="text-2xl font-bold">Printful</span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-stone-900 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">Ready to automate your workflow?</h2>
          <p className="text-xl text-gray-300 mb-10">Join hundreds of sellers saving 20+ hours a week.</p>
          <Link href="/signup" className="inline-block bg-white text-stone-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
            Start your free trial today
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-xl font-bold text-stone-900">Customizer.pro</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Customizer. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 text-sm">Terms</Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 text-sm">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
