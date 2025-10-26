import { CalendarDays, Droplet, Flame } from "lucide-react";

const CyclePage = () => {
  return (
    <div className="max-w-2xl mx-auto pb-16">
      {/* Header */}
      <section className="bg-gradient-to-b from-pink-300 to-pink-500 text-white rounded-3xl p-6 shadow-md">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-sm opacity-90">19 October</h2>
            <p className="text-2xl font-semibold">Period</p>
            <p className="text-lg font-medium">Day 1</p>
          </div>
          <CalendarDays className="w-10 h-10" />
        </div>

        <div className="flex items-center justify-between mt-4 text-sm">
          <p>14</p>
          <p>15</p>
          <p>16</p>
          <p>17</p>
          <p className="font-semibold underline">18</p>
        </div>

        <button className="mt-5 w-full bg-white text-pink-600 font-semibold py-2 rounded-xl hover:bg-pink-100 transition">
          Edit period dates
        </button>
      </section>

      {/* Daily Insights */}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
          My daily insights - Today
        </h3>

        <div className="flex gap-4 overflow-x-auto pb-2">
          <div className="min-w-[170px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Log your symptoms</p>
            <button className="mt-3 text-pink-600 font-semibold">Log now</button>
          </div>
          <div className="min-w-[170px] bg-white dark:bg-gray-800 rounded-2xl p-4 shadow">
            <p className="text-sm text-gray-600 dark:text-gray-300">Track a change or pregnancy</p>
            <button className="mt-3 text-pink-600 font-semibold">See update</button>
          </div>
        </div>
      </section>

      {/* Coping with cramps */}
      <section className="mt-6">
        <div className="bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100 rounded-2xl p-5 flex flex-col gap-3 shadow">
          <h4 className="font-semibold">Coping with cramps</h4>
          <ul className="text-sm list-disc pl-5 space-y-1 opacity-90">
            <li>Drink warm fluids</li>
            <li>Use a heating pad</li>
            <li>Try gentle yoga or stretching</li>
          </ul>
          <button className="bg-purple-600 text-white rounded-lg py-2 font-medium mt-2 hover:bg-purple-700 transition">
            Manage the pain
          </button>
        </div>
      </section>

      {/* Based on current cycle */}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Based on your current cycle
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
            <div className="flex items-center gap-2 text-pink-500">
              <Droplet size={18} />
              <h4 className="font-semibold">Blood clots during period</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Learn what’s normal and when to consult a doctor.
            </p>
            <button className="mt-3 text-pink-600 font-semibold">See more</button>
          </div>
          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
            <div className="flex items-center gap-2 text-orange-500">
              <Flame size={18} />
              <h4 className="font-semibold">Boost energy during period</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Try iron-rich foods and light activity to stay energized.
            </p>
            <button className="mt-3 text-pink-600 font-semibold">See more</button>
          </div>
        </div>
      </section>

      {/* My Cycles */}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
          My cycles
        </h3>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current cycle: <span className="font-semibold text-pink-600">Day 1</span>
          </p>
          <button className="mt-3 bg-pink-600 text-white rounded-lg py-2 w-full hover:bg-pink-700 transition">
            Log previous cycle
          </button>
        </div>
      </section>

      {/* Cycle summary */}
      <section className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Cycle summary
        </h3>
        <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow space-y-3">
          <div className="flex justify-between text-sm">
            <span>Previous period length</span>
            <span className="font-semibold">5 days</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Previous cycle length</span>
            <span className="font-semibold">28 days</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Average cycle</span>
            <span className="font-semibold">Regular</span>
          </div>
          <button className="mt-3 text-pink-600 font-semibold">See more</button>
        </div>
      </section>
    </div>
  );
};

export default CyclePage;
