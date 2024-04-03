// TODO: style change
type ClassDictionary = Record<string, any>;
type ClassArray = ClassValue[];
type ClassValue = string | number | boolean | ClassArray | ClassDictionary | null | undefined

export const cn = (...inputs: ClassValue[]) => {
  return inputs.filter(Boolean).join(' ')
}

export * from './cssVar'
export * from './getRenderContainer'
export * from './isCustomNodeSelected'
export * from './isTextSelected'

