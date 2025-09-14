import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// API functions for portfolio data
export const portfolioAPI = {
  // Get personal information
  async getPersonalInfo() {
    const { data, error } = await supabase
      .from('personal_info')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  },

  // Get about me information
  async getAbout() {
    const { data, error } = await supabase
      .from('about_me')
      .select('*')
      .single()
    
    if (error) throw error
    return data
  },

  // Get education data
  async getEducation() {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  // Get skills data grouped by category
  async getSkills() {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('category, skill_name')
    
    if (error) throw error
    
    // Group skills by category
    const grouped = data.reduce((acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill.skill_name)
      return acc
    }, {} as Record<string, string[]>)
    
    return grouped
  },

  // Get projects data
  async getProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  // Get certifications data
  async getCertifications() {
    const { data, error } = await supabase
      .from('certifications')
      .select('*')
      .order('order_index')
    
    if (error) throw error
    return data
  },

  // Get extracurricular data
  async getExtracurricular() {
    const { data, error } = await supabase
      .from('extracurricular')
      .select('*')
      .order('category')
    
    if (error) throw error
    return data
  },

  // Submit contact form
  async submitContact(contactData: { name: string; email: string; message: string }) {
    const { data, error } = await supabase.functions.invoke('contact', {
      body: contactData
    })
    
    if (error) throw error
    return data
  }
}