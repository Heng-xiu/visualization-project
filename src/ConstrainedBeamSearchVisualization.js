import React, { useState, useEffect } from 'react';

// Node 組件：表示搜索樹中的一個節點
const Node = ({ node, depth, maxDepth, step }) => {
  // 控制節點的可見性，只有當前步驟大於等於節點深度時才顯示
  const isVisible = depth <= step;
  // 判斷節點是否被選中（在搜索路徑上）
  const isSelected = node.selected && depth < maxDepth;
  // 檢查節點是否滿足約束條件
  const meetsConstraint = node.meetsConstraint;

  return (
    <div className={`flex flex-col items-center ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      {/* 節點的主要內容 */}
      <div className={`p-2 rounded border ${isSelected ? 'bg-green-200 border-green-500' : 'bg-gray-200 border-gray-400'} ${meetsConstraint ? 'ring-2 ring-blue-500' : ''}`}>
        <div>{node.text}</div>
        <div className="text-sm text-gray-600">Prob: {node.probability.toFixed(2)}</div>
        {meetsConstraint && <div className="text-xs text-blue-600">Meets Constraint</div>}
      </div>
      {/* 遞歸渲染子節點 */}
      {node.children && (
        <div className="flex mt-4 space-x-4">
          {node.children.map((child, index) => (
            <Node key={index} node={child} depth={depth + 1} maxDepth={maxDepth} step={step} />
          ))}
        </div>
      )}
    </div>
  );
};

// 主要的 ConstrainedBeamSearchVisualization 組件
const ConstrainedBeamSearchVisualization = () => {
  // 使用 useState 鉤子管理組件狀態
  const [step, setStep] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const maxSteps = 4;
  const constraint = "delicious";

  // 搜索樹的數據結構
  const treeData = {
    text: "Start",
    probability: 1,
    selected: true,
    meetsConstraint: false,
    children: [
      {
        text: "I",
        probability: 0.6,
        selected: true,
        meetsConstraint: false,
        children: [
          {
            text: "I like",
            probability: 0.4,
            selected: true,
            meetsConstraint: false,
            children: [
              {
                text: "I like eating",
                probability: 0.3,
                selected: true,
                meetsConstraint: false,
                children: [
                  {
                    text: "I like eating delicious apples",
                    probability: 0.25,
                    selected: true,
                    meetsConstraint: true,
                  },
                  {
                    text: "I like eating apples",
                    probability: 0.2,
                    selected: false,
                    meetsConstraint: false,
                  }
                ]
              },
              {
                text: "I like delicious",
                probability: 0.1,
                selected: false,
                meetsConstraint: true,
              }
            ]
          },
          {
            text: "I love",
            probability: 0.2,
            selected: false,
            meetsConstraint: false,
          }
        ]
      },
      {
        text: "Delicious",
        probability: 0.3,
        selected: false,
        meetsConstraint: true,
      },
      {
        text: "The",
        probability: 0.1,
        selected: false,
        meetsConstraint: false,
      }
    ]
  };

  // 使用 useEffect 鉤子處理自動播放功能
  useEffect(() => {
    let timer;
    if (autoPlay && step < maxSteps) {
      timer = setTimeout(() => setStep(step + 1), 2000);
    }
    // 清理函數，用於在組件卸載或依賴項變化時清除計時器
    return () => clearTimeout(timer);
  }, [autoPlay, step]);

  // 控制按鈕的處理函數
  const handleNext = () => {
    if (step < maxSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleReset = () => {
    setStep(0);
    setAutoPlay(false);
  };

  // 組件的 JSX 結構
  return (
    <div className="p-4 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Constrained Beam Search Visualization</h2>
      <p className="mb-4">Translating: "我喜歡吃蘋果" to English</p>
      <p className="mb-4">Constraint: Must include the word "{constraint}"</p>
      <div className="mb-4 overflow-x-auto">
        <Node node={treeData} depth={0} maxDepth={maxSteps} step={step} />
      </div>
      {/* 控制按鈕 */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Previous
        </button>
        <span>Step {step} of {maxSteps}</span>
        <button
          onClick={handleNext}
          disabled={step === maxSteps}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
      <div className="mt-4 flex justify-center space-x-4">
        <button
          onClick={() => setAutoPlay(!autoPlay)}
          className={`px-4 py-2 ${
            autoPlay ? 'bg-red-500' : 'bg-green-500'
          } text-white rounded`}
        >
          {autoPlay ? 'Pause' : 'Auto Play'}
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ConstrainedBeamSearchVisualization;