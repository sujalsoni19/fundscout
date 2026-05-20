import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getWatchlistItems, deleteWatchListItem } from "./../api/mf.api.js";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";
import { Spinner } from "@/components/ui/spinner.jsx";

function Watchlist() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllItems = async () => {
    setLoading(true);
    try {
      const res = await getWatchlistItems();
      // console.log(res);
      setItems(res?.data?.data || []);
    } catch (error) {
      console.log("error in fetching watchlist items:", error);
    } finally {
      setLoading(false);
    }
  };

  const removeItem = async (schemeCode) => {
    try {
      const res = await deleteWatchListItem(schemeCode);
      toast.success(res?.data?.message || "item removed successfully");
      getAllItems();
    } catch (error) {
      console.log("error in removing item:", error);
      toast.error("error in removing item");
    }
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl text-center">
          <h1 className=" text-3xl font-bold">Your Watchlist of Funds</h1>
        </div>
        {items.length > 0 && (
          <div className="mt-8 w-full max-w-3xl space-y-4">
            {items.map((fund) => (
              <Card
                key={fund.schemeCode}
                className="rounded-2xl border border-slate-200 shadow-sm transition hover:shadow-md"
              >
                <CardContent className="flex items-center gap-1 justify-between px-2">
                  <Link className="flex-1" to={`/fund/${fund.schemeCode}`}>
                    <div>
                      <h3 className="text-base font-semibold text-slate-900">
                        {fund.schemeName}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Scheme Code: {fund.schemeCode}
                      </p>
                    </div>
                  </Link>

                  <Button
                    variant="destructive"
                    onClick={() => removeItem(fund.schemeCode)}
                    className="rounded-xl"
                  >
                    <X />
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {loading && (
          <div className="my-18">
            <Spinner className="size-8" />
          </div>
        )}
        {!loading && items.length === 0 && (
          <div className="mt-10 text-center text-slate-500">
            Your watchlist is empty.
          </div>
        )}
      </div>
    </div>
  );
}

export default Watchlist;
