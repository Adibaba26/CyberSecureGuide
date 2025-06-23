import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "dark") return <Moon className="h-4 w-4" />
    if (theme === "light") return <Sun className="h-4 w-4" />
    return <Sun className="h-4 w-4" /> // system default
  }

  const getLabel = () => {
    if (theme === "dark") return "Dark"
    if (theme === "light") return "Light" 
    return "Auto"
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="flex items-center space-x-2"
    >
      {getIcon()}
      <span className="text-sm">{getLabel()}</span>
    </Button>
  )
}