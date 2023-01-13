import { createContext, useContext, useState, useEffect } from 'react'

export const SearchContext = createContext({})

function SearchProvider({ children }) {
  const [textSearch, setTextSearch] = useState('')

  function valueSearch(text) {
    setTextSearch(text)
  }

  useEffect(() => {
    valueSearch(textSearch)
  }, [textSearch])

  return (
    <SearchContext.Provider value={{
      textSearch,
      valueSearch
    }}>
      {children}
    </SearchContext.Provider>
  )
}

function useSearch() {
  const context = useContext(SearchContext)

  return context
}

export { SearchProvider, useSearch }