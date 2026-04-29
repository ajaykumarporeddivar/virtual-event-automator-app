import type { NextPage } from 'next';
import { FiCalendar, FiMail, FiSettings, FiStar, FiUsers } from 'lucide-react';
import { clsx } from 'clsx';
import Head from 'next/head';
import { useEffect } from 'react';
import { useClient } from '@hooks';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Virtual Event Automator</title>
        <meta name="description" content="Streamline and enhance your virtual events with our automation tool" />
      </Head>
      <main>
        <section className="bg-[#f7f7f7] py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full xl:w-1/2 p-6 text-lg">
                <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Simplify Virtual Events</h1>
                <p className="mt-4 text-xl text-gray-500">Automate tasks, reduce wasted time, and increase attendee engagement with our virtual event automator.</p>
                <div className="mt-8">
                  <a href="/dashboard" className="bg-[#3498db] text-white font-bold py-2 px-4 rounded">
                    Get Started Free →
                  </a>
                  <a href="/dashboard" className="ml-4 text-[#3498db] font-bold py-2 px-4 border border-[#3498db] rounded">
                    See Demo →
                  </a>
                </div>
              </div>
              <div className="w-full xl:w-1/2 p-6">
                <div className="h-full bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#f0f0f0] p-4 rounded">Event Scheduling</div>
                    <div className="bg-[#f0f0f0] p-4 rounded">Automated Email Notifications</div>
                    <div className="bg-[#f0f0f0] p-4 rounded">Virtual Event Page</div>
                    <div className="bg-[#f0f0f0] p-4 rounded">Session Management</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">Features</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiCalendar size={36} />
                  <h3 className="text-lg font-bold mt-4">Event Scheduling</h3>
                  <p className="text-gray-500">Schedule virtual events and set reminders for attendees.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiMail size={36} />
                  <h3 className="text-lg font-bold mt-4">Automated Email Notifications</h3>
                  <p className="text-gray-500">Send automated email notifications to attendees, speakers, and organizers.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiSettings size={36} />
                  <h3 className="text-lg font-bold mt-4">Virtual Event Page</h3>
                  <p className="text-gray-500">Customizable virtual event page for attendees to access event details, materials, and sessions.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiStar size={36} />
                  <h3 className="text-lg font-bold mt-4">Session Management</h3>
                  <p className="text-gray-500">Create, manage, and assign sessions to speakers and moderators.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiUsers size={36} />
                  <h3 className="text-lg font-bold mt-4">Attendee Management</h3>
                  <p className="text-gray-500">Manage attendee registrations, track attendance, and analyze engagement metrics.</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                <div className="bg-white rounded shadow-md p-4 flex flex-col justify-center items-center">
                  <FiSettings size={36} />
                  <h3 className="text-lg font-bold mt-4">Integration with Popular Platforms</h3>
                  <p className="text-gray-500">Integrates with popular video conferencing platforms, such as Zoom and Google Meet.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f7] py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">How it Works</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                <h3 className="text-lg font-bold mt-4">Step 1: Create Your Event</h3>
                <p className="text-gray-500">Create a new virtual event and set the details, such as date, time, and location.</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                <h3 className="text-lg font-bold mt-4">Step 2: Customize Your Event Page</h3>
                <p className="text-gray-500">Customize your virtual event page to fit your brand and style.</p>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mt-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                <h3 className="text-lg font-bold mt-4">Step 3: Manage Attendees and Sessions</h3>
                <p className="text-gray-500">Manage attendee registrations, track attendance, and assign sessions to speakers and moderators.</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-6">
                <h3 className="text-lg font-bold mt-4">Step 4: Send Automated Notifications</h3>
                <p className="text-gray-500">Send automated email notifications to attendees, speakers, and organizers before, during, and after the event.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">Stats and Social Proof</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/4 xl:w-1/4 p-6 text-lg text-gray-500">
                10,000+ users
              </div>
              <div className="w-full md:w-1/4 xl:w-1/4 p-6 text-lg text-gray-500">
                99.9% uptime
              </div>
              <div className="w-full md:w-1/4 xl:w-1/4 p-6 text-lg text-gray-500">
                4.9/5 average rating
              </div>
              <div className="w-full md:w-1/4 xl:w-1/4 p-6 text-lg text-gray-500">
                24/7 customer support
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#f7f7f7] py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">Pricing</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 xl:w-1/3 p-6 bg-white rounded shadow-md">
                <h3 className="text-lg font-bold mt-4">Free</h3>
                <p className="text-gray-500">For small events and personal use</p>
                <ul className="list-none mb-4">
                  <li>Up to 100 attendees</li>
                  <li>1 event per month</li>
                  <li>Basic support</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 p-6 bg-white rounded shadow-md">
                <h3 className="text-lg font-bold mt-4">Pro ($49/mo)</h3>
                <p className="text-gray-500">For growing events and businesses</p>
                <ul className="list-none mb-4">
                  <li>Up to 1,000 attendees</li>
                  <li>5 events per month</li>
                  <li>Prioritized support</li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 p-6 bg-white rounded shadow-md">
                <h3 className="text-lg font-bold mt-4">Enterprise (Custom)</h3>
                <p className="text-gray-500">For large events and enterprises</p>
                <ul className="list-none mb-4">
                  <li>Unlimited attendees</li>
                  <li>Unlimited events</li>
                  <li>Dedicated support</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <a href="/dashboard" className="bg-[#3498db] text-white font-bold py-2 px-4 rounded">
                Start Free
              </a>
            </div>
          </div>
        </section>
        <section className="bg-white py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-4">Get Started Today</h2>
            <p className="text-lg text-gray-500">Launch your virtual event with our easy-to-use automator and take your events to the next level.</p>
            <div className="mt-8">
              <a href="/dashboard" className="bg-[#3498db] text-white font-bold py-2 px-4 rounded">
                Launch Your Dashboard →
              </a>
            </div>
          </div>
        </section>
        <footer className="bg-[#333] text-white py-20">
          <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-6 text-lg">
                <h3 className="text-lg font-bold mt-4">Virtual Event Automator</h3>
                <p className="text-gray-200">Built with NEXUS OS</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-6 text-lg">
                <ul className="list-none">
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-200 hover:text-white">
                      Dashboard
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;