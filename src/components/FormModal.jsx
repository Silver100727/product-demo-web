import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import FormfacadeEmbed from "@formfacade/embed-react";

const FormModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 hover:bg-white shadow-md"
        >
          <X size={20} />
        </button>

        <div className="grid md:grid-cols-2 h-full w-screen">
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/104909126239609168005/form/1FAIpQLSfu3A_x8DPyZKsp67FskEvnXDoPAFjHmC62pZQIIa4pfa1cFA/classic.js/?div=ff-compose"
            onSubmitForm={() => {
              onClose();
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FormModal;
