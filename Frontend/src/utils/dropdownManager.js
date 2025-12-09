// Global dropdown management system
class DropdownManager {
  constructor() {
    this.activeDropdown = null;
    this.dropdowns = new Map();
  }
 
  register(id, setIsOpen) {
    this.dropdowns.set(id, setIsOpen);
  }
 
  unregister(id) {
    this.dropdowns.delete(id);
    if (this.activeDropdown === id) {
      this.activeDropdown = null;
    }
  }
 
  openDropdown(id) {
    // Close all other dropdowns
    this.dropdowns.forEach((setIsOpen, dropdownId) => {
      if (dropdownId !== id) {
        setIsOpen(false);
      }
    });
    this.activeDropdown = id;
  }
 
  closeDropdown(id) {
    if (this.activeDropdown === id) {
      this.activeDropdown = null;
    }
    const setIsOpen = this.dropdowns.get(id);
    if (setIsOpen) {
      setIsOpen(false);
    }
  }
 
  closeAll() {
    this.dropdowns.forEach(setIsOpen => setIsOpen(false));
    this.activeDropdown = null;
  }
}
 
export const dropdownManager = new DropdownManager();