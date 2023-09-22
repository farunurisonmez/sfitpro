import {INavigation} from "../navigations.interface"

export interface IDrawers extends INavigations {
  isOpen:boolean,
  onClose:()=>void
}
