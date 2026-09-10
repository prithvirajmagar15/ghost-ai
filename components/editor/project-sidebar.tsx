"use client"

import { PanelLeftClose, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProjectSidebarProps {
  isOpen: boolean
  onClose: () => void
}

function EmptyProjectsState() {
  return (
    <div className="flex min-h-48 items-center justify-center rounded-xl border border-dashed border-surface-border px-6 text-center">
      <p className="text-sm text-copy-muted">No projects yet</p>
    </div>
  )
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <aside
      aria-hidden={!isOpen}
      className={`fixed bottom-0 left-0 top-14 z-30 flex w-80 flex-col border-r border-surface-border bg-surface shadow-2xl transition-transform duration-200 ease-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-16 items-center justify-between border-b border-surface-border px-5">
        <h2 className="text-lg font-semibold text-copy-primary">Projects</h2>
        <Button
          aria-label="Close projects sidebar"
          className="text-copy-secondary hover:bg-subtle hover:text-copy-primary"
          onClick={onClose}
          size="icon"
          variant="ghost"
        >
          <PanelLeftClose className="h-5 w-5" />
        </Button>
      </div>

      <Tabs className="flex flex-1 flex-col px-4 pt-4" defaultValue="my-projects">
        <TabsList className="grid w-full grid-cols-2 bg-subtle">
          <TabsTrigger value="my-projects">My Projects</TabsTrigger>
          <TabsTrigger value="shared">Shared</TabsTrigger>
        </TabsList>
        <TabsContent className="mt-4 flex-1" value="my-projects">
          <EmptyProjectsState />
        </TabsContent>
        <TabsContent className="mt-4 flex-1" value="shared">
          <EmptyProjectsState />
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button className="w-full" variant="default">
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  )
}
