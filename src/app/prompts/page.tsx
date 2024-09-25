"use client"

import { useState } from "react"
import { Library } from "@/components/library"
import { Header } from "@/components/header"
import { SearchBar } from "@/components/search-bar"

export default function Prompts() {
  const [search_query, set_search_query] = useState("")

  const handle_search = (query: string) => {
    set_search_query(query)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <SearchBar on_search={handle_search} />
        <div>
          <Library prompts_to_show={30} search_query={search_query} />
        </div>
      </div>
    </div>
  )
}
