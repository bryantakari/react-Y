
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {type Transaction } from "@/services/service-transaction"
import { useState } from "react"

type DialogTransactionProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit: (formData: Transaction) => void;
};

export function DialogTransaction(
    {isOpen,
    setIsOpen,
    onSubmit,}: DialogTransactionProps) {
    const [formData,setFormData] = useState<Transaction>({
        id: 1,
        name: '',
        type: '',
        status: '',
        price: '',
        createdAt:new Date(),
    });
    
  return (
    <Dialog open={isOpen}>
      <form>
        <DialogTrigger asChild className="m-1">
          <Button variant="default" onClick={()=>setIsOpen(true)}>Add Transaction</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" value={formData?.name} onChange={e=>setFormData(prev=>({
                ...prev,name:e.target.value
              }))} defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price-1" >Price</Label>
              <Input id="price-1" name="price" type="number" value={formData?.price} onChange={(e)=>{
                setFormData(prev => ({
                    ...prev,
                    price: e.target.value === "" ? "" : Number(e.target.value),
                }))} 
            }/>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="status-1">Status</Label>
              <Input id="status-1" name="status" value={formData?.status} onChange={e=>setFormData(prev=>({
                ...prev,status:e.target.value 
              }))} />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="type-1">Type</Label>
              <Input id="type-1" name="type" value={formData?.type} onChange={e=>setFormData(prev=>({
                ...prev,type:e.target.value 
              }))} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" onClick={()=>setIsOpen(false)}>Cancel</Button>
            </DialogClose>
            <Button type="submit" onClick={()=>onSubmit(formData)}>Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
