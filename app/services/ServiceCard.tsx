'use client';

import { useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  image: string;
  description: string;
  extra: string;
  forwhom: string;
  wedo: string;
  youget: string;
}

// robust slugifier: "&" -> "and", remove punctuation, collapse spaces to hyphens
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export default function ServiceCard(props: ServiceCardProps) {
  const { title, image, description, extra, forwhom, wedo, youget } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const serviceSlug = slugify(title);
  const isOpen = searchParams.get("service") === serviceSlug;

  const openModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("service", serviceSlug);
    const q = params.toString();
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };

  const closeModal = () => {
    const current = new URLSearchParams(window.location.search); // ✅ always fresh
    current.delete("service");
    const q = current.toString();
    router.push(q ? `${pathname}?${q}` : pathname, { scroll: false });
  };  

  // close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Card */}
      <motion.div
        className="cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent hover:border-yellow-400 transition-transform transform hover:-translate-y-2"
        whileHover={{ scale: 1.05 }}
        onClick={openModal}
      >
        <div
          className="h-56 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-3 text-black">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // click backdrop to close
          >
            <motion.div
              className="bg-white max-w-xl w-full rounded-3xl shadow-2xl relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // prevent backdrop close when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute top-4 right-4 z-20 bg-gray-100 hover:bg-gray-200 rounded-full p-2 shadow"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-800" />
              </button>

              <div className="relative z-10 p-8 max-h-[75vh] overflow-y-auto">
                <h3 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
                  {title}
                </h3>
                <p className="text-lg text-gray-700 mb-6 text-center">
                  {description}
                </p>
                <p className="text-gray-600 mb-8 text-center">{extra}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      For Whom
                    </h4>
                    <p className="text-gray-700">{forwhom}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      We Do
                    </h4>
                    <p className="text-gray-700">{wedo}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-yellow-500 mb-2">
                      You Get
                    </h4>
                    <p className="text-gray-700">{youget}</p>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <Link href="/contact">
                    <button className="px-10 py-3 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold rounded-xl shadow-lg hover:shadow-xl transition transform hover:scale-105">
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
