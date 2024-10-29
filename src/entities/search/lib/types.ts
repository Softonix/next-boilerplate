export type TQuestType = "mySearch" | "myChosenCar"

export type TSearchQuest = {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  active?: boolean
}
