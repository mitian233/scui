export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost'
export type ComponentSize = 'sm' | 'md' | 'lg'
export type ComponentSkin = 'default' | 'game'
export interface SelectionItem { value: string; label: string; description?: string; icon?: string; disabled?: boolean }
export type StatTone = 'vocal' | 'dance' | 'visual' | 'mental' | 'skill'
export interface TabItem { value: string; label: string; disabled?: boolean }
export interface SelectItem { value: string; label: string; disabled?: boolean }
export interface AccordionItem { value: string; title: string; content?: string; disabled?: boolean }
