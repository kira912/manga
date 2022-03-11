import { inject, InjectionKey } from 'vue'

export function injectStrict<T>(key: InjectionKey<T>, fallback?: T) {
  const resolved = inject(key, fallback)

  console.log(resolved, key);
  
  if (!resolved) {
    throw new Error(`Could not resolve ${key.description}`)
  }

  return resolved
}