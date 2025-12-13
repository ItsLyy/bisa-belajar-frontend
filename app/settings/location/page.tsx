/**
 * Components
 */
import { ArrowLeftIcon, MapPinIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

/**
 * Utils
 */
import { getMe } from "@/app/_datas/auth/get-me";

/**
 * Types
 */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edit Location",
  description: "Update your location information"
};

export default async function LocationSettingsPage() {
  const user = await getMe();

  return (
    <section className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="flex items-center gap-4 mb-8">
        <Link
          href="/profile"
          className="p-2 rounded-lg hover:bg-app-150 transition-colors"
        >
          <ArrowLeftIcon className="size-6 text-app-400" />
        </Link>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-full bg-app-200/20 border border-app-200/30">
            <MapPinIcon className="size-6 text-app-200" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-app-500">Edit Location</h1>
            <p className="text-app-300">Set your location for better matching</p>
          </div>
        </div>
      </header>

      {/* Current Location */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6 mb-6">
        <h3 className="text-lg font-semibold text-app-400 mb-3">Current Location</h3>
        <div className="flex items-center gap-3 p-4 bg-app-150/50 rounded-lg border border-app-300/20">
          <MapPinIcon className="size-5 text-app-400" />
          <div>
            <p className="text-app-400 font-medium">
              {user?.latitude && user?.longitude
                ? `Lat: ${user.latitude.toFixed(4)}, Lng: ${user.longitude.toFixed(4)}`
                : "Location not set"
              }
            </p>
            <p className="text-sm text-app-300">
              {user?.latitude && user?.longitude
                ? "Coordinates are set"
                : "Please set your location to find nearby skill partners"
              }
            </p>
          </div>
        </div>
      </div>

      {/* Location Form */}
      <div className="bg-app-100/30 rounded-xl border border-app-300/10 p-6">
        <h3 className="text-lg font-semibold text-app-400 mb-4">Update Location</h3>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="latitude" className="block text-sm font-medium text-app-400 mb-2">
                Latitude
              </label>
              <input
                type="number"
                id="latitude"
                name="latitude"
                step="0.0001"
                defaultValue={user?.latitude || ""}
                placeholder="-6.2088"
                className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="longitude" className="block text-sm font-medium text-app-400 mb-2">
                Longitude
              </label>
              <input
                type="number"
                id="longitude"
                name="longitude"
                step="0.0001"
                defaultValue={user?.longitude || ""}
                placeholder="106.8456"
                className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
              />
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-app-400 mb-2">
              Address (Optional)
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="e.g., Jakarta, Indonesia"
              className="w-full px-4 py-3 rounded-lg bg-app-150 border border-app-300/20 focus:outline-none focus:ring-2 focus:ring-app-200 focus:border-transparent"
            />
            <p className="text-xs text-app-300 mt-1">
              Optional: Add a human-readable address for better context
            </p>
          </div>

          {/* Location Tips */}
          <div className="bg-app-150/30 rounded-lg p-4 border border-app-300/10">
            <h4 className="font-medium text-app-400 mb-2">How to get coordinates:</h4>
            <ul className="text-sm text-app-300 space-y-1">
              <li>• Use Google Maps and right-click to get coordinates</li>
              <li>• Visit latlong.net to find coordinates for any address</li>
              <li>• Enable location services in your browser</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4 border-t border-app-300/10">
            <Link
              href="/profile"
              className="flex-1 px-4 py-3 text-center rounded-lg border border-app-300/20 text-app-300 hover:bg-app-150 transition-colors"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="flex-1 px-4 py-3 rounded-lg bg-app-200 text-app-500 font-medium hover:bg-app-200/80 transition-colors"
            >
              Update Location
            </button>
          </div>
        </form>
      </div>

      {/* Privacy Note */}
      <div className="mt-6 bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-4">
        <p className="text-sm text-yellow-400">
          <strong>Privacy Note:</strong> Your location is only used to help you find nearby skill partners.
          We never share your exact coordinates with other users.
        </p>
      </div>
    </section>
  );
}