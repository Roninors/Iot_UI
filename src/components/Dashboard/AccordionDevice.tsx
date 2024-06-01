import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const AccordionDevice = ({
  accordionTriggerText,
  accordionText,
}: {
  accordionTriggerText: string;
  accordionText: string;
}) => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>{accordionTriggerText}</AccordionTrigger>
          <AccordionContent>{accordionText}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AccordionDevice;
