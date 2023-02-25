export interface SidebarItem {
    icon: string;
    href: string;
    text: string;
}
export interface BackItem {
    text: string;
    href: string;
    icon: string;
}
export interface SidebarGroup {
    name: string | null;
    items: SidebarItem[];
}
export interface SidebarContent {
    title: string;
    items: SidebarGroup[];
}
