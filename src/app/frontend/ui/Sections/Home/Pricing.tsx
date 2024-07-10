"use client";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Background from "../../background";
import { Button, buttonVariants } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { DataTable } from "./PricingTable";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const handleToggle = () => {
    setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly");
  };

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Only Pay For What You Use
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 align-middle mb-12">
            Your tokens never expire!
            <br />
            Any unused tokens from previous months roll over and can be used
            anytime your
            accumulated tokens remain valid and ready for use whenever you
            return.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-20 ring-1 p-2 rounded-xl items-center pt-6 align-middle justify-center ring-gray-200 ">
          <DataTable />
        </div>
      </div>
    </div>
  );
}
