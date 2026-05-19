'use client'

import React, { useState } from 'react';
import { Bell, Lock, Globe, Moon, Sun, Shield, Smartphone, ChevronRight, ToggleLeft, ToggleRight } from 'lucide-react';

const ToggleSwitch = ({ enabled, onToggle }) => (
  <button
    onClick={onToggle}
    className={`relative w-11 h-6 rounded-full transition-all duration-300 cursor-pointer ${enabled ? 'bg-cyan-500' : 'bg-gray-200 dark:bg-white/10'}`}
  >
    <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-300 ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
  </button>
);

const SectionTitle = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-4 pb-4 border-b border-gray-100 dark:border-white/[0.06]">
    <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
      <Icon size={18} className="text-cyan-600 dark:text-cyan-400" />
    </div>
    <div>
      <h3 className="text-gray-900 dark:text-white font-bold text-base">{title}</h3>
      <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">{description}</p>
    </div>
  </div>
);

const SettingRow = ({ label, description, toggled, onToggle }) => (
  <div className="flex items-center justify-between py-3.5 border-b border-gray-50 dark:border-white/[0.03] last:border-0">
    <div>
      <p className="text-gray-800 dark:text-slate-200 text-sm font-medium">{label}</p>
      {description && <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">{description}</p>}
    </div>
    {onToggle !== undefined ? (
      <ToggleSwitch enabled={toggled} onToggle={onToggle} />
    ) : (
      <ChevronRight size={16} className="text-gray-300 dark:text-slate-600" />
    )}
  </div>
);

const DashboardSettings = () => {
  const [settings, setSettings] = useState({
    emailNotif: true,
    smsNotif: false,
    appointmentReminder: true,
    darkMode: false,
    twoFactor: false,
    dataSharing: true,
    marketingEmails: false,
    appUpdates: true,
  });

  const toggle = (key) => setSettings(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-gray-900 dark:text-white font-black text-2xl">Settings</h2>
        <p className="text-gray-500 dark:text-slate-400 text-sm mt-1">Manage your account preferences</p>
      </div>

      {/* Notification Settings */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6 space-y-4">
        <SectionTitle
          icon={Bell}
          title="Notifications"
          description="Choose how you want to receive alerts and reminders"
        />
        <div>
          <SettingRow
            label="Email Notifications"
            description="Receive updates and alerts via email"
            toggled={settings.emailNotif}
            onToggle={() => toggle('emailNotif')}
          />
          <SettingRow
            label="SMS Notifications"
            description="Get text messages for urgent updates"
            toggled={settings.smsNotif}
            onToggle={() => toggle('smsNotif')}
          />
          <SettingRow
            label="Appointment Reminders"
            description="Remind me 24 hours before my appointment"
            toggled={settings.appointmentReminder}
            onToggle={() => toggle('appointmentReminder')}
          />
          <SettingRow
            label="Marketing Emails"
            description="Special offers and health tips"
            toggled={settings.marketingEmails}
            onToggle={() => toggle('marketingEmails')}
          />
        </div>
      </div>

      {/* Security Settings */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6 space-y-4">
        <SectionTitle
          icon={Shield}
          title="Privacy & Security"
          description="Keep your account safe and control your data"
        />
        <div>
          <SettingRow
            label="Two-Factor Authentication"
            description="Add an extra layer of security"
            toggled={settings.twoFactor}
            onToggle={() => toggle('twoFactor')}
          />
          <SettingRow
            label="Data Sharing"
            description="Share anonymized data to improve services"
            toggled={settings.dataSharing}
            onToggle={() => toggle('dataSharing')}
          />
          <SettingRow label="Change Password" />
          <SettingRow label="Active Sessions" />
        </div>
      </div>

      {/* Appearance */}
      <div className="bg-white dark:bg-[#0f172a] rounded-2xl border border-gray-100 dark:border-white/[0.06] shadow-sm p-6 space-y-4">
        <SectionTitle
          icon={Globe}
          title="Appearance & Language"
          description="Customize how the app looks and feels"
        />
        <div>
          <SettingRow
            label="Dark Mode"
            description="Switch to dark theme"
            toggled={settings.darkMode}
            onToggle={() => toggle('darkMode')}
          />
          <SettingRow
            label="App Update Notifications"
            description="Be notified of new features"
            toggled={settings.appUpdates}
            onToggle={() => toggle('appUpdates')}
          />
          <div className="flex items-center justify-between py-3.5">
            <div>
              <p className="text-gray-800 dark:text-slate-200 text-sm font-medium">Language</p>
              <p className="text-gray-400 dark:text-slate-500 text-xs mt-0.5">Currently: English</p>
            </div>
            <select className="text-sm border border-gray-200 dark:border-white/[0.08] bg-gray-50 dark:bg-white/[0.04] text-gray-700 dark:text-slate-300 rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-500">
              <option>English</option>
              <option>বাংলা</option>
              <option>हिन्दी</option>
            </select>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-red-50/50 dark:bg-red-500/5 rounded-2xl border border-red-100 dark:border-red-500/10 p-6 space-y-4">
        <div className="flex items-start gap-4 pb-4 border-b border-red-100 dark:border-red-500/10">
          <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-500/10 flex items-center justify-center flex-shrink-0">
            <Lock size={18} className="text-red-500" />
          </div>
          <div>
            <h3 className="text-red-600 dark:text-red-400 font-bold text-base">Danger Zone</h3>
            <p className="text-red-400/70 dark:text-red-400/50 text-xs mt-0.5">These actions are irreversible</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 py-2.5 px-4 rounded-xl border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm font-semibold hover:bg-red-100 dark:hover:bg-red-500/10 transition-colors cursor-pointer">
            Deactivate Account
          </button>
          <button className="flex-1 py-2.5 px-4 rounded-xl bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors cursor-pointer">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSettings;
