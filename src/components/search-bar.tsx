import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

type SearchBarProps = {
  on_search: (query: string) => void
}

export function SearchBar({ on_search }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
      <Input
        type="text"
        placeholder="Search prompts..."
        className="pl-10 pr-4"
        onChange={(e) => on_search(e.target.value)}
      />
    </div>
  )
}